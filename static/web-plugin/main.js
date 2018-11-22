let icon = "<circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"none\" fill-rule=\"evenodd\" stroke=\"currentColor\" stroke-width=\"2\"></circle>";

rtb.initialize({
  extensionPoints: {
    bottomBar: {
      title: "Hi",
      svgIcon: icon,
      positionPriority: 1,
      onClick: async () => {
        alert('Hi!')
      }
    }
  }
})
