import { useForm } from 'react-hook-form'
import { useUserContext } from '../components/providers/UserProvider'

const useUserForm = () => {
    const { user, updateUserData } = useUserContext()
    const { username } = user
    const form = useForm({ defaultValues: { username } })

    const handleConfirm = (data) => {
        try {
            updateUserData(data)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        form: { ...form, handleSubmit: form.handleSubmit(handleConfirm) }
    }
}

export default useUserForm