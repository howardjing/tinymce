/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import TextColorPlugin from 'tinymce/plugins/textcolor/Plugin';

declare let tinymce: any;

TextColorPlugin();

tinymce.init({
  selector: 'textarea.tinymce',
  plugins: 'textcolor code',
  toolbar: 'forecolor backcolor code',
  skin_url: '../../../../../js/tinymce/skins/lightgray',
  height: 600
});