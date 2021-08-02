import { useState } from 'react'
import { useRouter } from 'next/router'

import supabase from '../lib/supabase'

const Auth: React.FC = () => {
  const [email, setEmail] = useState<string>()
  const { push } = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase.auth.signIn({ email })

    if (!error) push('/')
  }

  return (
    <div className="border rounded-lg p-12 w-4/12 mx-auto my-48">
      <h3 className="font-extrabold text-3xl">Ahoy!</h3>

      <p className="text-gray-500 text-sm mt-4">
        Fill in your email, we'll send you a magic link.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email address"
          className="border w-full p-3 rounded-lg mt-4 focus:border-indigo-500"
          onChange={e => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="bg-indigo-500 text-white w-full p-3 rounded-lg mt-8 hover:bg-indigo-700"
        >
          Let's go!
        </button>
      </form>
    </div>
  )
}

export default Auth
