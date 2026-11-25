import ScriptChain from '@/components/ScriptChain';

/*
 * The old <link rel="stylesheet">, <style> and <script> tags of a page.
 * React puts the stylesheets into <head> in this order.
 * The scripts run one after another, in this order, after the page has loaded.
 */
export default function PageAssets({ styles = [], scripts = [] }) {
  return (
    <>
      {styles.map((href) => (
        <link key={href} rel="stylesheet" href={href} precedence="legacy" />
      ))}
      {scripts.length ? <ScriptChain scripts={scripts} /> : null}
    </>
  );
}
