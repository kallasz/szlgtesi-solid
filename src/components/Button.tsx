export const Button = (props) => {
  return <button onclick={props.onclick}>{props.children}</button>
}

export const ButtonGroup = (props) => {
  return (
    <>
      <button>1</button>
      <button>2</button>
    </>
  )
}