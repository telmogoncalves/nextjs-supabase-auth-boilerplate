import Link from 'next/link'

import supabase from '../lib/supabase'

const Homepage: React.FC = () => {
  const user = supabase.auth.user()

  return (
    <>
      <Link href="/auth">Login now!</Link>

      <pre>
        <code>
          {JSON.stringify(user, null, 2)}
        </code>
      </pre>
    </>
  )
}

export default Homepage
