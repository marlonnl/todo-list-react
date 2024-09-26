import * as enums from '../utils/enums/Task'

// classe das tarefas

class Task {
  // title, description, status, priority, id
  id: number
  title: string
  description: string
  priority: enums.Priority
  status: enums.Status

  constructor(
    id: number,
    title: string,
    description: string,
    priority: enums.Priority,
    status: enums.Status
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.priority = priority
    this.status = status
  }
}

export default Task
