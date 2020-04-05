import Container from '../Container'
import meta from '../../utils/meta'
import ModuleImage from './images/ModuleImage'
import ModuleCDN from './images/ModuleCDN'
import ModuleFile from './images/ModuleFile'

const IndexStart = () => (
	<Container className="py-4">
		<h2 className="mb-3">Getting started</h2>
		<ol className="fr-getting-started__list flex flex-gap-4">
			<li className="flex flex-column flex-gap-1">
				<ModuleImage />
				<h5>Module</h5>
				<code>import 'fractures'</code>
				<p>Install with npm or yarn, then import it once, globally.</p>
			</li>
			<li className="flex flex-column flex-gap-1">
				<ModuleCDN />
				<h5>CDN</h5>
				<input type="text" value={ `<link href="${ meta.cdn }" rel="stylesheet" />` } />
				<p>This is not great for production, but great for prototypes or lazy people.</p>
			</li>
			<li className="flex flex-column flex-gap-1">
				<ModuleFile />
				<h5>Download</h5>
				<p>Save with your hands, and serve as you wish. 🐹</p>
				<p>
					See releases on <a href="https://github.com/fractures/fractures/releases">GitHub</a>.
				</p>
			</li>
		</ol>
		<style jsx>{`
			@media (max-width: 1020px) {
				.fr-getting-started__list {
					flex-direction: column;
				}

				.fr-getting-started__list li {
					margin-right: 0 !important;
					width: 100% !important;
				}

				.fr-getting-started__list li + li {
					margin-top: 2rem;
				}
			}

			.fr-getting-started__list li {
				width: calc(100% / 3);
			}
		`}</style>
	</Container>
)

export default IndexStart
