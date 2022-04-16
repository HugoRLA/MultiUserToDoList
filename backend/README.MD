## API Planing

### User Management

Login
```
POST /login
body: {
    user: string
    password: string
}
```
Logout
```
POST /logout
body: {
    user: string
}
```

Signup
```
POST /signup
body: {
    user: string
}
```

### To Do Lists Management

#### Projects Management

Create Project
```
POST /project
body: {
    name: string
}
return
{
    id: project_id
}
```

Get Project
This endpoint should return the project metadata and tasks
```
GET /project
return : {
    id: project_id
    name: string
    task: [{   
            name: string
            desc: string
            created_date: string
            finished_date: string
        }]
}
```

Update Project definition
```
PUT /project/{project_id}
body: {
    id: project_id
}
```

Delete Project
```
DELETE /project/{project_id}
```

#### Tasks Management

Create task
```
POST /project/{project_id}/task
body: {
        name: string
        desc: string
}
return
{
    id: task_id
}
```

Update task definition
```
PUT /project/{project_id}/task/{task_id}
body: {
    id: task_id
    {
        name: string
        desc: string
    }
}
```

Set task to completed
```
POST /project/{project_id}/task/{task_id}/completed 
body{
    date: string
}
```

Delete task
```
DELETE /project/{project_id}/task/{task_id}
```