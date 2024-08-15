import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DatePipe, NgClass } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { TaskListComponent } from './components/task-list/task-list.component';
import { UpdatetaskComponent } from './components/updatetask/updatetask.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { DeletetaskComponent } from './components/deletetask/deletetask.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { ReportComponent } from './components/report/report.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { UserHdashboardComponent } from './user-hdashboard/user-hdashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { UsertasksComponent } from './usertasks/usertasks.component';
import { UserfeedbackComponent } from './userfeedback/userfeedback.component';
import { UserchecklistComponent } from './userchecklist/userchecklist.component';
import { UserassignedtasksComponent } from './userassignedtasks/userassignedtasks.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { UseraddtaskComponent } from './useraddtask/useraddtask.component';
import { UserdeleteComponent } from './userdelete/userdelete.component';
import { UsernotificationComponent } from './usernotification/usernotification.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmCodeComponent } from './confirm-code/confirm-code.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AdminnotificationComponent } from './adminnotification/adminnotification.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AboutWebsiteComponent } from './about-website/about-website.component';
import { RouterModule } from '@angular/router'; // Import RouterModule

// Amplify.configure({
//   Auth: {
//     Cognito: {
//       userPoolId: 'ap-south-1_bLURhJHu9',
//       userPoolClientId: '42qpg4v7fk0s93v5tgpkkhjggo'
//     }
//   }
// });
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddTaskComponent,
    TaskListComponent,
    UpdatetaskComponent,
    HomeComponent,
    AuthComponent,
    DeletetaskComponent,
    UserHomeComponent,
    ReportComponent,
    LoginUserComponent,
    UserHdashboardComponent,
    UserDashboardComponent,
    LayoutComponent,
    UsertasksComponent,
    UserfeedbackComponent,
    UserchecklistComponent,
    UserassignedtasksComponent,
    UserupdateComponent,
    UseraddtaskComponent,
    UserdeleteComponent,
    UsernotificationComponent,
    RegisterComponent,
    ConfirmCodeComponent,
    LoginAdminComponent,
    AdminnotificationComponent,
    AdmindashboardComponent,
    AboutWebsiteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    AmplifyAuthenticatorModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(),
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
