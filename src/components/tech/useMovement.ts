import { useCallback, useEffect, useRef, useState } from 'react';

export const useMovement = () => {
	const rafRef = useRef(0);
	const [xAxisPosition, setXAxisPosition] = useState(0);
	const [yAxisPosition, setYAxisPosition] = useState(0);
	const xAxisDirection = useRef<'forward' | 'backward'>('forward');
	const yAxisDirection = useRef<'upward' | 'downward'>('downward');
	const xAxisPositionRef = useRef<number>(0);
	const yAxisPositionRef = useRef<number>(0);

	xAxisPositionRef.current = xAxisPosition;
	yAxisPositionRef.current = yAxisPosition;

	const animate = useCallback(() => {
		if (xAxisDirection.current === 'forward') {
			if (xAxisPositionRef.current < 95) {
				setXAxisPosition(prev => prev + 0.3);
			} else {
				xAxisDirection.current = 'backward';
				setXAxisPosition(prev => prev - 0.3);
			}
		}

		if (xAxisDirection.current === 'backward') {
			if (xAxisPositionRef.current > 5) {
				setXAxisPosition(prev => prev - 0.3);
			} else {
				xAxisDirection.current = 'forward';
				setXAxisPosition(prev => prev + 0.3);
			}
		}

		if (yAxisDirection.current === 'downward') {
			if (yAxisPositionRef.current < 95) {
				setYAxisPosition(prev => prev + 0.3);
			} else {
				yAxisDirection.current = 'upward';
				setXAxisPosition(prev => prev - 0.3);
			}
		}

		if (yAxisDirection.current === 'upward') {
			if (yAxisPositionRef.current > 5) {
				setYAxisPosition(prev => prev - 0.3);
			} else {
				yAxisDirection.current = 'downward';
				setYAxisPosition(prev => prev + 0.3);
			}
		}

		rafRef.current = requestAnimationFrame(animate);
	}, []);

	useEffect(() => {
		rafRef.current = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(rafRef.current);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		xAxisPosition,
		yAxisPosition
	};
};
