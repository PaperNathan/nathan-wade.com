export default function ListItems() {
  const list = new Array(10).fill(<li>Test</li>)
  return (
    <>
      { list }
    </>
  )
}