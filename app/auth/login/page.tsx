"use client"

import React, { useActionState } from 'react'
import { Stack, TextField, Button, Link } from '@mui/material'
import NextLink from 'next/link'
import login from './login'
const Login = () => {
  const [state, formAction] = useActionState(login, { error: "" })
  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2} >
        <TextField error={!!state.error} helperText={state.error} name="email" label="Email" variant="outlined" type="email" />

        <TextField error={!!state.error} helperText={state.error} name="password" label="Password" variant="outlined" type="password" />

        <Button type="submit" variant="contained">Login</Button>

        <Link component={NextLink} href='/auth/signup' className="self-center">Singup</Link>
      </Stack>
    </form>
  )
}

export default Login
