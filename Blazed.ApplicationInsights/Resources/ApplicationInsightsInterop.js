var ApplicationInsightsInterop;
(function (ApplicationInsightsInterop) {
    function configure(INSTRUMENTATION_KEY) {
        var script = document.createElement("script");
        script.async = true;
        var s = 'var sdkInstance="appInsightsSDK";window[sdkInstance]="appInsights";var aiName=window[sdkInstance],aisdk=window[aiName]||function(n){var o={config:n,initialize:!0},t=document,e=window,i="script";setTimeout(function(){var e=t.createElement(i);e.src=n.url||"https://az416426.vo.msecnd.net/scripts/b/ai.2.min.js",t.getElementsByTagName(i)[0].parentNode.appendChild(e)});try{o.cookie=t.cookie}catch(e){}function a(n){o[n]=function(){var e=arguments;o.queue.push(function(){o[n].apply(o,e)})}}o.queue=[],o.version=2;for(var s=["Event","PageView","Exception","Trace","DependencyData","Metric","PageViewPerformance"];s.length;)a("track"+s.pop());var r="Track",c=r+"Page";a("start"+c),a("stop"+c);var u=r+"Event";if(a("start"+u),a("stop"+u),a("addTelemetryInitializer"),a("setAuthenticatedUserContext"),a("clearAuthenticatedUserContext"),a("flush"),o.SeverityLevel={Verbose:0,Information:1,Warning:2,Error:3,Critical:4},!(!0===n.disableExceptionTracking||n.extensionConfig&&n.extensionConfig.ApplicationInsightsAnalytics&&!0===n.extensionConfig.ApplicationInsightsAnalytics.disableExceptionTracking)){a("_"+(s="onerror"));var p=e[s];e[s]=function(e,n,t,i,a){var r=p&&p(e,n,t,i,a);return!0!==r&&o["_"+s]({message:e,url:n,lineNumber:t,columnNumber:i,error:a}),r},n.autoExceptionInstrumented=!0}return o}(' +
            '{' +
            '   instrumentationKey: "' + INSTRUMENTATION_KEY + '"' +
            '}' +
            '); (window[aiName] = aisdk).queue && 0 === aisdk.queue.length && aisdk.trackPageView({});';
        script.src = s;
        document.head.appendChild(script);
        console.log("[INSTRUMENTATION_KEY][" + INSTRUMENTATION_KEY + "] Configured");
    }
    ApplicationInsightsInterop.configure = configure;
    function navigate(href) {
        console.log('Navigated: ${href}');
    }
    ApplicationInsightsInterop.navigate = navigate;
})(ApplicationInsightsInterop || (ApplicationInsightsInterop = {}));
//# sourceMappingURL=ApplicationInsightsInterop.js.map