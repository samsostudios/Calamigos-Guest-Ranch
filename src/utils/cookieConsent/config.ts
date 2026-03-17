export type ConsentCategory = 'essential' | 'analytics';
export type TrackingService = {
  id: string;
  name: string;
  load: () => void;
};
export type TrackingConfig = Record<ConsentCategory, TrackingService[]>;

export const TRACKING_CONFIG: TrackingConfig = {
  essential: [],
  analytics: [
    {
      id: 'gtm',
      name: 'Google Tag Manager',
      load: () => {
        if (document.querySelector('script[data-consent-service="gtm"]')) return;

        const script = document.createElement('script');
        script.dataset.consentService = 'gtm';
        script.innerHTML = `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K44D3F5G');
        `;
        document.head.appendChild(script);
      },
    },
    // {
    //   id: 'clarity',
    //   name: 'Microsoft Clarity',
    //   load: () => {
    //     if (document.querySelector('script[data-consent-service="clarity"]')) return;

    //     const script = document.createElement('script');
    //     script.dataset.consentService = 'clarity';
    //     script.type = 'text/javascript';
    //     script.innerHTML = `
    //       (function(c,l,a,r,i,t,y){
    //           c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    //           t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    //           y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    //       })(window, document, "clarity", "script", "sdcchev5bi");
    //     `;
    //     document.head.appendChild(script);
    //   },
    // },
  ],
};
