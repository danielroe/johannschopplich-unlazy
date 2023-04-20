import { LazyImage } from '../src'

function App() {
  return (
    <>
      <div>
        <LazyImage
          blurhash="LKO2:N%2Tw=w]~RBVZRi};RPxuwH"
          autoSizes={true}
          data-srcset="image-320w.jpg 320w, image-640w.jpg 640w"
          width="640"
          height="640"
        />
      </div>
    </>
  )
}

export default App
