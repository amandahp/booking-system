import { useForm } from "react-hook-form";
import { ModalProps } from "./types"
import * as S from './Modal.styles'

export const Modal = (props:ModalProps) => {
 const {setIsOpen} = props
 const { register, handleSubmit, watch, formState: { errors } } = useForm();
 const onSubmit = () => console.log();


 return(
  <>
   <S.Bg onClick={() => setIsOpen(false)} />
   <S.Centered>
     <S.Modal>
       <div>
         <h5>Adicionar um novo Agendamento</h5>
       </div>
       <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Nome: <input type="text" placeholder="Nome" {...register("data")} /></label>
          <div className="date">
           <label>Data: <input type="date" {...register("data")} /></label>
           <label>Horário: <input type="time" id="appt" min="09:00" max="18:00" {...register("exampleRequired", { required: true })} /></label>
          </div>
          <label className="checkbox">Disponível: <input type="checkbox"/></label>
          <label>Observações: <textarea /></label>
          {errors.exampleRequired && <span>This field is required</span>}
          <div className="buttons">
           <button onClick={() => setIsOpen(false)} type="submit">
              Salvar
           </button>
           <button className="cancel" onClick={() => setIsOpen(false)}>
             Cancelar
           </button>
          </div>
          
        </form>
       
       </div>
       
     </S.Modal>
   </S.Centered>
  </>
 )
}