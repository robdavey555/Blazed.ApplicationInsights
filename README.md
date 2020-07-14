# Blazor.ApplicationInsights

## This is a Blazor Library component for ApplicationInsights

**Note: I have only implemented for Server-Side Blazor**


In order to use this please follow these steps

1. Download this project and add a reference in your Blazor project within Visual Studio2. 
2. Add a reference to ```<script src="_content/Blazed.ApplicationInsights/blazor-application-insight.js"></script>``` in your **_Host.cshtml** file
3. Add a reference to ```@using Blazed.ApplicationInsights.Components``` to your **_Imports.razor** file
4. Add ```<ApplicationInsights INSTRUMENTATION_KEY="your key here" />``` to the bottom of your **App.razor** file. Ensuring your **INSTRUMENTATION_KEY** is used. It is possible to inject this from your **appsettings.json** using DI and **IConfiguration**
Run the project and ensure that the script appears in the html head section of the page


## Nuget package

https://www.nuget.org/packages/Blazed.ApplicationInsights
