using Blazor.ApplicationInsights.Constants;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.JSInterop;
using System;
using System.Threading.Tasks;

namespace Blazor.ApplicationInsights.Components
{
    public class ApplicationInsightsComponent : ComponentBase, IDisposable
    {
        [Parameter]
        public string INSTRUMENTATION_KEY { get; set; } = null;

        [Inject]
        protected NavigationManager NavigationManager { get; set; } = null;

        [Inject]
        protected IJSRuntime JSRuntime { get; set; } = null;

        protected override async Task OnInitializedAsync()
        {
            await base.OnInitializedAsync();

            NavigationManager.LocationChanged -= OnLocationChanged;
            NavigationManager.LocationChanged += OnLocationChanged;

            await Task.Delay(1).ContinueWith(async t =>
            {
                await JSRuntime.InvokeAsync<string>(ApplicationInsightsInterop.Configure,
                    INSTRUMENTATION_KEY);
            });
        }

        private async void OnLocationChanged(object sender, LocationChangedEventArgs args)
        {
            var relativeUri = new Uri(args.Location).PathAndQuery;

            await Task.Delay(1).ContinueWith(async t =>
            {
                await JSRuntime.InvokeAsync<string>(ApplicationInsightsInterop.Navigate, relativeUri);
            });
        }
        public void Dispose()
        {
            NavigationManager.LocationChanged -= OnLocationChanged;
        }
    }
}