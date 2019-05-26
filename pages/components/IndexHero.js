import Container from '../../components/Container'
import Fractures from '../../components/images/Fractures'
import Link from 'next/link'
import meta from '../../utils/meta.js'
import Button from '../../components/Button'
import IndexSkeleton from './IndexSkeleton'

const IndexHero = () => (
	<section className="index-hero py-6">
		<Container className="flex flex-gap-3">
			<div className="flex flex-gap-4">
				<div className="grow-1">
					<h1 title="fractures" className="flex flex-ycenter flex-gap-2">
						<Fractures size={ 48 } />
						<span>fr&middot;ctures</span>
					</h1>
					<b className="source-code-pro">Baseline atomic CSS toolkit.</b>
					<p className="my-3">
						<b>fractures</b>
						{` `}
						helps you bootstrap design-systems and prototypes by providing a set of non-blocking, atomic, utility classes.{' '}
						<Link href="/about">
							<a>Learn more.</a>
						</Link>
					</p>
					<a href="https://github.com/fractures/fractures">
						<Button label="GitHub" />
					</a>
					<div className="mt-3 source-code-pro">
						<small>
							version: {meta.version}
							<br />
							size: {meta.size}b gzipped
						</small>
					</div>
				</div>
			</div>
			<IndexSkeleton />
		</Container>
		<style jsx global>{`
			.index-hero {
				background-color: var(--color-light);
			}
		`}</style>
	</section>
)

export default IndexHero
