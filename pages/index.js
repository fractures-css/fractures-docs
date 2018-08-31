import IndexHero from "./components/IndexHero"
import IndexSkeleton from "./components/IndexSkeleton"
import IndexStart from "./components/IndexStart"
import Layout from "../components/Layout"

const Index = () => (
	<Layout title="fractures">
		<IndexHero />
		<IndexSkeleton />
		<IndexStart />
	</Layout>
)

export default Index
