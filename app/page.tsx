import { MainNavigation as App} from './(navigation)/main-navigation'
import Client from './component/client-component'
export default function Home() {
  // flex min-h-screen flex-col items-center justify-between w-full p-24 bg-[#eae8ea]/
  return (
      <main>
        {/* <Client> */}
          <App />
        {/* </Client> */}
      </main>
  )
}
