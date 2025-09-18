"use client"

import React from 'react'
import { Stack, TextField, Button, Link } from '@mui/material'
import NextLink from 'next/link'
import { useFormState } from 'react-dom'
import createUser from './create-user'
export default function Signup() {
  const [state, formAction] = useFormState(createUser, { error: "" })

  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2} >
        <TextField name="email" label="Email" variant="outlined" type="email" />

        <TextField name="email" label="Password" variant="outlined" type="pasasword" />

        <Button type="submit" variant="contained">Singup</Button>

        <Link component={NextLink} href='/auth/login' className="self-center">Login</Link>
      </Stack>
    </form>
  )
}

