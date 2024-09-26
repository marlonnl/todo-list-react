import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      1,
      'Estudar JS',
      '',
      enums.Priority.IMPORTANTE,
      enums.Status.PENDENTE
    ),
    new Task(
      2,
      'Estudar TS',
      'Rever aula 02 do módulo',
      enums.Priority.URGENTE,
      enums.Status.CONCLUIDA
    ),
    new Task(
      3,
      'Estudar React',
      'Praticar os useEffect',
      enums.Priority.URGENTE,
      enums.Status.PENDENTE
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = taskSlice.actions
export default taskSlice.reducer
