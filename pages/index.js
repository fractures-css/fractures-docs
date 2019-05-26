import Button from '../components/Button'
import Container from '../components/Container'
import Examples from '../components/Examples'
import Fractures from '../components/images/Fractures'
import IndexStart from '../components/pages/IndexStart'
import Layout from '../components/Layout'
import Link from 'next/link'
import meta from '../utils/meta.js'

const Index = () => (
	<Layout title="fractures">
		<section className="index-hero py-6">
			<Container className="index-hero__container flex flex-gap-4">
				<div className="fr-index grow-1 flex flex-gap-4">
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
				<Examples />
			</Container>
			<style jsx global>{`
				@media (max-width: 1020px) {
					.index-hero__container {
						flex-direction: column;
					}

					.index-hero__container > div:first-child {
						margin-right: 0;
						margin-bottom: 32px;
					}

					.fr-index {
						flex-basis: auto;
					}
				}

				.index-hero {
					background-color: var(--color-light);
				}

				.index-hero__container {
					background-image: url('/static/images/hero.svg');
					background-size: contain;
					background-repeat: no-repeat;
					background-position: left center;
				}
			`}</style>
		</section>
		<IndexStart />
	</Layout>
)

export default Index
