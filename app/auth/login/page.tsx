import React from 'react'
import { Stack, TextField, Button, Link } from '@mui/material'
import NextLink from 'next/link'
const Login = () => {
  return (
    <Stack spacing={2} className="w-full max-w-xs">
      <TextField label="Email" variant="outlined" type="email" />

      <TextField label="Password" variant="outlined" type="pasasword" />

      <Button variant="contained">Login</Button>

      <Link component={NextLink} href='/auth/signup' className="self-center">Singup</Link>
    </Stack>
  )
}

export default Login
