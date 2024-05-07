import { Badge, Button, Card, TextInput, Title } from '@tremor/react'
import {useUserActions} from '../hooks/useUserActions'
import { useState } from 'react'
export function CreateNewUser () {
    const { addUser } = useUserActions()
    const [result, setResult] = useState<string|null>(null)


    const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setResult(null)

        const form = event.target as any
        const formData = new FormData(form)

        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const github = formData.get('github') as string

        if(!name || !email || !github){
            return setResult('ERROR')
        }

        addUser({name, email, github})
        setResult('OK')
        form.reset()



    }
    return (
        <Card style = {{ marginTop: '16px' }}>
            <Title>
                Create New User
            </Title>
            <form onSubmit={handleSumbit} className=''>
                <TextInput
                    name='name'
                    placeholder='Aquí el nombre'
                />
                <TextInput
                    name='email'
                    placeholder='Aquí el email'
                />
                <TextInput
                    name='github'
                    placeholder='Aquí el GitHub'
                />
                <div>
                    <Button
                        type='submit'
                        style={{marginTop: '16px'}}
                    >
                        Crear Usuario
                    </Button>
                    <span>
                        {result === 'OK' && <Badge color='green'>Usuario creado correctamente</Badge>}
                        {result === 'ERROR' && <Badge color='red'>Debe completar todos los campos</Badge>}
                    </span>
                </div>
            </form>
        </Card>
    )
}