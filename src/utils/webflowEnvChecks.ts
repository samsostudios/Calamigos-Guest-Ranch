type WebflowEnv = 'design' | 'preview' | 'editor' | 'published';

export function getWebflowEnv(): WebflowEnv {
  const wf = (window as any).Webflow;
  const isEditor =
    document.documentElement.hasAttribute('w-editor') ||
    typeof (window as any).WebflowEditor !== 'undefined' ||
    wf?.env?.('editor') === true;

  const isPreview = wf?.env?.('preview') === true;

  // displayMode(isEditor ? 'editor' : isPreview ? 'preview' : 'published');

  return isEditor ? 'editor' : isPreview ? 'preview' : 'published';
}

function displayMode(env: string) {
  if (env === 'preview') {
    console.log('👀 Designer Preview mode!');
  } else if (env === 'editor') {
    console.log('🛠 Editor Mode');
  } else {
    console.log('🌍 Production site');
  }
}
