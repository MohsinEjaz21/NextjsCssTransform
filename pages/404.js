export default function NoPageFound() {
  return (
    <>
      <h1>404</h1>
    </>
  )
}

// @channel any body knows if our app is vulnereable to Local file inclusion ( LFI ).
//  https://example-site.com/?module=contact.jsp

//  Can be changed to look like this:
//  https://example-site.com/?module=/etc/passwd