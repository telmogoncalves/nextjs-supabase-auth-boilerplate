import { useState } from 'react'
import { useRouter } from 'next/router'

import supabase from '../lib/supabase'

const VerifyOTP: React.FC = () => {
  const [token, setToken] = useState<string>('')
  // You can't use this, it's here for the purpose
  // of making the article more easy.
  const phone = 'YOUR_PHONE_NUMBER'
  const { push } = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { session, error } = await supabase.auth.verifyOTP({ phone, token })

    console.log({ session })

    if (!error) push('/')
  }

  return (
    <div className="border rounded-lg p-12 w-4/12 mx-auto my-48">
      <h3 className="font-extrabold text-3xl">Verify OTP</h3>

      <p className="text-gray-500 text-sm mt-4">
        You should've received an SMS with a code.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="token"
          placeholder="Your OTP code"
          className="border w-full p-3 rounded-lg mt-4 focus:border-indigo-500"
          onChange={e => setToken(e.target.value)}
        />

        <button
          type="submit"
          className="bg-indigo-500 text-white w-full p-3 rounded-lg mt-8 hover:bg-indigo-700"
        >
          Verify
        </button>
      </form>
    </div>
  )
}

export default VerifyOTP
