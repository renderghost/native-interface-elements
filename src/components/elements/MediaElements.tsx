'use client';

import React, { useEffect, useRef } from 'react';
import ComponentDisplay from '../ComponentDisplay/ComponentDisplay';

const MediaElements: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (canvasRef.current) {
			const ctx = canvasRef.current.getContext('2d');
			if (ctx) {
				ctx.fillStyle = '#3498db';
				ctx.fillRect(10, 10, 180, 80);
			}
		}
	}, []);

	return (
		<section id='media-elements'>
			<h2 className='text-2xl font-bold mb-6 pb-2 border-b'>
				Media Elements
			</h2>

			<ComponentDisplay
				id='audio'
				title='Audio'
				codeExample={`<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`}>
				<audio controls>
					<source
						src='https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3'
						type='audio/mpeg'
					/>
					Your browser does not support the audio element.
				</audio>
			</ComponentDisplay>

			<ComponentDisplay
				id='video'
				title='Video'
				codeExample={`<video controls width="250">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video element.
</video>`}>
				<video controls width={250}>
					<source
						src='https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm'
						type='video/webm'
					/>
					Your browser does not support the video element.
				</video>
			</ComponentDisplay>

			<ComponentDisplay
				id='canvas'
				title='Canvas'
				codeExample={`<canvas id="demo-canvas" width="200" height="100" style="border:1px solid #000;"></canvas>
<script>
  var canvas = document.getElementById("demo-canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#3498db";
  ctx.fillRect(10, 10, 180, 80);
</script>`}>
				<canvas
					ref={canvasRef}
					width='200'
					height='100'
					style={{ border: '1px solid #000' }}></canvas>
			</ComponentDisplay>
		</section>
	);
};

export default MediaElements;
