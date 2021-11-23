import { useForm } from "react-hook-form";
import { supabase } from '../../utils/supbaseClient'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function AskAQuestion() {
    const {register, handleSubmit, formState: {errors} } = useForm();
    const router = useRouter()
    const submitData = async (formInput)=>{
        const {data, error } = await supabase
            .from('questions')
            .insert([
                formInput
            ])
    }

    const onSubmit = async (formInput) => {
        submitData(formInput).then(()=>{
            router.push('/thank-you')
        })
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`form-group ${styles.spacing}`}>
                    <label htmlFor="name">What's your Name?</label>
                    <input {...register("name")} className="form-control" id="name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">What's your email?</label>
                    <input {...register("email")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="question">Ask us your Question!</label>
                    <textarea {...register("question")} className="form-control" rows="3"></textarea>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1" required>Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}