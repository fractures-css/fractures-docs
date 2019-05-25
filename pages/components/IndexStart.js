import Pre from '../../components/Pre'
import Container from '../../components/Container'
import meta from '../../utils/meta.js'

const IndexStart = () => (
	<Container className="py-4">
		<h2 className="mb-3">Getting started</h2>
		<ol className="flex flex-column flex-gap-4">
			<li className="flex flex-column flex-gap-2">
				<h4>Module</h4>
				<Pre lines={ [`npm i fractures`, null, `import "fractures/dist/fractures.css"`] } />
				<p>
					Install with npm or yarn, then import it once, globally. You can find usage examples under{' '}
					<a href="https://github.com/fractures/fractures-examples">fractures-examples</a> for <b>React</b> and <b>Next.js</b>.
				</p>
				<small>
					Although you can import <code>fractures.prefixed.min.css</code>
					{` `}
					just as easily&mdash;for production use, I recommend running the fractures.css file through your build process.
				</small>
			</li>
			<li className="flex flex-column flex-gap-2">
				<h4>CDN</h4>
				<Pre lines={ [`&lt;link href="${ meta.cdn }" rel="stylesheet" /&gt;`] } />
				<p>This is not great for production, but great for prototypes or lazy people.</p>
			</li>
			<li className="flex flex-column flex-gap-2 ">
				<h4>Download</h4>
				<Pre
					lines={ [
						`Save with your hands, and serve as you wish. 🐹`,
						`See releases on <a href="https://github.com/fractures/fractures/releases">GitHub</a>`
					] }
				/>
			</li>
		</ol>
	</Container>
)

export default IndexStart
