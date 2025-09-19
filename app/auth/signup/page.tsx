"use client"

import React from 'react'
import { Stack, TextField, Button, Link } from '@mui/material'
import NextLink from 'next/link'
import { useActionState } from 'react'
import createUser from './create-user'
export default function Signup() {
  const [state, formAction] = useActionState(createUser, { error: "" })

  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2} >
        <TextField name="email" label="Email" variant="outlined" type="email" helperText={state.error} error={!!state.error} />

        <TextField name="password" label="Password" variant="outlined" type="password" helperText={state.error} error={!!state.error} />

        <Button type="submit" variant="contained">Singup</Button>

        <Link component={NextLink} href='/auth/login' className="self-center">Login</Link>
      </Stack>
    </form>
  )
}

