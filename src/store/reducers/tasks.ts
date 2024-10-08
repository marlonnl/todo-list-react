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
      title: 'Estudar JavaScript',
      description: 'Estudar javascript revendo o exercicio do modulo 7',
      priority: enums.Priority.IMPORTANTE,
      status: enums.Status.PENDENTE
    },
    {
      id: 2,
      title: 'Estudar TypeScript',
      description: 'Estudar material de apoio',
      priority: enums.Priority.URGENTE,
      status: enums.Status.CONCLUIDA
    },
    {
      id: 3,
      title: 'Estudar Bootstrap',
      description: 'Praticar a construção de uma landing page',
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
    },
    cadastrar: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      // verifica se a tarefa já existe
      const taksExists = state.itens.find(
        (tarefa) =>
          tarefa.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (taksExists) {
        alert('Tarefa já existe.')
      } else {
        const lastTask = state.itens[state.itens.length - 1]
        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        }
        state.itens = [...state.itens, newTask]
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const taksIndex = state.itens.findIndex((t) => t.id === action.payload.id)

      if (taksIndex >= 0) {
        state.itens[taksIndex].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { cadastrar, remove, edit, alteraStatus } = taskSlice.actions
export default taskSlice.reducer
