import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TasksState = {
  itens: Task[]
}

const initialState: TasksState = {
  itens: [
    {
      id: 1,
      title: 'Estudar JS',
      description: '',
      priority: enums.Priority.IMPORTANTE,
      status: enums.Status.PENDENTE
    },
    {
      id: 2,
      title: 'Estudar typescript',
      description: 'Rever a aula 2 do módulo',
      priority: enums.Priority.URGENTE,
      status: enums.Status.CONCLUIDA
    },
    {
      id: 3,
      title: 'Estudar React',
      description: 'Praticar o useEffect',
      priority: enums.Priority.URGENTE,
      status: enums.Status.PENDENTE
    }
  ]
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((task) => task.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.itens.findIndex((i) => i.id === action.payload.id)

      if (taskIndex >= 0) {
        state.itens[taskIndex] = action.payload
      }
    }
  }
})

export const { remove, edit } = taskSlice.actions
export default taskSlice.reducer
