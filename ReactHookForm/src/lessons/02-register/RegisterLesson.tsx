import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  username: string
  email: string
  message: string
}

export default function RegisterLesson() {
  const { register, handleSubmit } = useForm<FormData>()
  const [submittedData, setSubmittedData] = useState<FormData | null>(null)

  const onSubmit = (data: FormData) => {
    console.log(register('username'))
    setSubmittedData(data)
  }

  return (
    <div>
      <h2>Lesson 02: register</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('username')} placeholder="Username" />
        <input {...register('email')} type="email" placeholder="Email" />
        <textarea {...register('message')} placeholder="Message" />
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <pre>{JSON.stringify(submittedData, null, 2)}</pre>
      )}
    </div>
  )
}
