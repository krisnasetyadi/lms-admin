/* eslint-disable react/display-name */
import React, { useRef, useEffect, forwardRef } from "react";

interface CheckboxComponentProps {
  disabled?: boolean;
  indeterminate?: boolean;
  rest?: any;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxComponentProps>(
  ({ disabled = false, indeterminate, ...rest }, ref) => {
    const defaultRef = useRef<HTMLInputElement | null>(null);
    const resolvedRef = ref || defaultRef;
    console.log('resolvedRef',resolvedRef)
    useEffect(() => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = indeterminate ?? false;
      }
    }, [resolvedRef, indeterminate]);

    return (
      <input
        type="checkbox"
        className="mr-2"
        ref={resolvedRef}
        {...rest}
        disabled={disabled}
      />
    );
  }
);

export default Checkbox;
