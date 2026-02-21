import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const variants = {
      primary: "bg-gold text-white hover:bg-gold-light shadow-md hover:shadow-lg",
      outline: "border-2 border-gold text-gold hover:bg-gold hover:text-white",
      ghost: "text-charcoal hover:text-gold hover:bg-gold/10",
    }
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-8 py-3 text-base",
      lg: "px-10 py-4 text-lg",
    }

    const classes = cn(
      "inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50",
      variants[variant],
      sizes[size],
      className
    )

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
