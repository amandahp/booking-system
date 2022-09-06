import { BookingTableProps } from './types'
import * as S from './BookingTable.styles'

export const Table = (props:BookingTableProps) => {
 const { data } = props
 return(
  <>
  <S.Table>
    <tr>
      <th>Data e hora</th>
      <th>Cliente</th>
      <th>Observações</th>
      <th>Disponível</th>
    </tr>
    {data.map((values) => {
     return(
      <tr>
       <td>{values.date}</td>
       <td>{values.client}</td>
       <td>{values.observations}</td>
       <td>{values.aveilability === true ? "Sim" : "Não"}</td>
     </tr>
     )
    })}
  </S.Table>
  </>
 )
}