import { Button, Input } from '../basis'
import { useUserForm } from '../../hooks'

const UserForm = () => {
    const { form } = useUserForm()
    return (
        <div className='d-flex flex-column gap-3'>
            <Input
                form={form}
                label={String('Username').toUpperCase()}
                name='username'
            />

            <div className='d-flex justify-content-end gap-2'>
                <Button
                    className='btn-success'
                    text='Save'
                    handleOnClick={form.handleSubmit}
                />
            </div>
        </div>
    )
}

export default UserForm