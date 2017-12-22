1.
E:BrowserModule has already been loaded
A:Import BrowserAnimationsModule and HttpModule only once (either in your root module or a core module).

2.富文本中this.emit
E:Cannot read property 'emit' of undefined
A:"this"关键字的作用域问题
