import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgChannelCloseInit } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const ChannelCloseInit = (props: {
  message: MsgChannelCloseInit;
}) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txChannelCloseInitContent"
        components={[
          (
            <Name
              address={message.signer}
              name={signerMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          channelId: message.channelId,
          portId: message.portId,
        }}
      />
    </Typography>
  );
};

export default ChannelCloseInit;
