// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TxButtonProps as Props } from './types';

import React, { useContext } from 'react';
import { SubmittableResult } from '@polkadot/api';
import { useApi, useToggle } from '@polkadot/react-hooks';
import { assert, isFunction, isUndefined } from '@polkadot/util';

import Button from './Button';
import { StatusContext } from './Status';
import { useTranslation } from './translate';

export default function TxButton (props: Props): React.ReactElement<Props> {
  const { accountId, className, extrinsic: propsExtrinsic, icon, iconSize, isBasic, isDisabled, isNegative, isPrimary, isUnsigned, label, onClick, onFailed, onSendRef, onStart, onSuccess, onUpdate, params = [], tx = '', tooltip, withSpinner = true } = props;

  const { t } = useTranslation();
  const { api } = useApi();
  const { queueExtrinsic } = useContext(StatusContext);

  const [isSending, , setIsSending] = useToggle(false);
  const needsAccount = isUnsigned
    ? false
    : !accountId;

  const _onFailed = (result: SubmittableResult | null): void => {
    setIsSending(false);

    onFailed && onFailed(result);
  };

  const _onSuccess = (result: SubmittableResult): void => {
    setIsSending(false);

    onSuccess && onSuccess(result);
  };

  const _onSend = (): void => {
    let extrinsic: any;

    if (propsExtrinsic) {
      extrinsic = propsExtrinsic;
    } else {
      const [section, method] = tx.split('.');

      assert(api.tx[section] && api.tx[section][method], `Unable to find api.tx.${section}.${method}`);

      extrinsic = api.tx[section][method](...(
        isFunction(params)
          ? params()
          : params
      ));
    }

    assert(extrinsic, 'Expected generated extrinsic passed to TxButton');

    if (withSpinner) {
      setIsSending(true);
    }

    queueExtrinsic({
      accountId,
      extrinsic,
      isUnsigned,
      txFailedCb: withSpinner ? _onFailed : onFailed,
      txStartCb: onStart,
      txSuccessCb: withSpinner ? _onSuccess : onSuccess,
      txUpdateCb: onUpdate
    });

    onClick && onClick();
  };

  if (onSendRef) {
    onSendRef.current = _onSend;
  }

  return (
    <Button
      className={className}
      tooltip={tooltip}
      icon={icon || 'check'}
      isBasic={isBasic}
      isDisabled={isSending || isDisabled || needsAccount}
      isLoading={isSending}
      isNegative={isNegative}
      isPrimary={
        isUndefined(isPrimary)
          ? (!isNegative && !isBasic)
          : isPrimary
      }
      label={label || t('Submit')}
      onClick={_onSend}
      size={iconSize}
    />
  );
}
