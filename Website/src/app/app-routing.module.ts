import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { UpdatetaskComponent } from './components/updatetask/updatetask.component';
import { DeletetaskComponent } from './components/deletetask/deletetask.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { ReportComponent } from './components/report/report.component';
import { UserHdashboardComponent } from './user-hdashboard/user-hdashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { UserfeedbackComponent } from './userfeedback/userfeedback.component';
import { UserchecklistComponent } from './userchecklist/userchecklist.component';
import { UsertasksComponent } from './usertasks/usertasks.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { UseraddtaskComponent } from './useraddtask/useraddtask.component';
import { UserdeleteComponent } from './userdelete/userdelete.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { UserassignedtasksComponent } from './userassignedtasks/userassignedtasks.component';
import { UsernotificationComponent } from './usernotification/usernotification.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmCodeComponent } from './confirm-code/confirm-code.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AboutWebsiteComponent } from './about-website/about-website.component';
import { AdminnotificationComponent } from './adminnotification/adminnotification.component';

const routes: Routes = [
  { path: '', component: UserHomeComponent },

  {
    path: 'admindash',
    component: AdmindashboardComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'view-task', component: TaskListComponent },
      { path: 'add-task', component: AddTaskComponent },
      { path: 'view-task/update-task/:id', component: UpdatetaskComponent },
      { path: 'view-task/delete-task/:id', component: DeletetaskComponent },
      { path: 'report', component: ReportComponent },
      { path: 'adminnotify', component: AdminnotificationComponent },
    ],
  },

  { path: 'register', component: RegisterComponent },
  { path: 'confirmationCode', component: ConfirmCodeComponent },
  { path: 'login', component: LoginUserComponent },
  { path: 'home', component: UserDashboardComponent },
  { path: 'admin', component: LoginAdminComponent },

  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: '', component: UserDashboardComponent },
      { path: 'dash', component: UserDashboardComponent },
      { path: 'useradd-task', component: UseraddtaskComponent },
      { path: 'userdelete-task/:id', component: UserdeleteComponent },
      { path: 'userupdate-task/:id', component: UserupdateComponent },
      { path: 'usertask', component: UsertasksComponent },
      { path: 'userassign', component: UserassignedtasksComponent },
      { path: 'usercheck', component: UserchecklistComponent },
      { path: 'userfeed', component: UserfeedbackComponent },
      { path: 'usernotify', component: UsernotificationComponent },
    ],
  },
  { path: 'about', component: AboutWebsiteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
