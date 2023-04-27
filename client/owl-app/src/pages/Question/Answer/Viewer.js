import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

export default function ToastViewer() {
  // 마크다운
  const markdown = '## 마크다운 헤더';

  // HTML: span태그 글자색을 파란색으로 설정
  const html = '<h3> html 헤더 <span style="color:blue;">파란색</span></h3>';

  return (
    <div>
      <Viewer initialValue={markdown} />

      <Viewer initialValue={html} />
    </div>
  );
}