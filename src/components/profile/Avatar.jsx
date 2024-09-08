import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function SizeAvatars(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={props.profileImage}
        sx={{ width: '25vh', height: '25vh' }}
      />
    </Stack>
  );
}