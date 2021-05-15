const LogoutButton = () => {
	if (getUserId()) {
		return '...' // 显示"退出登录"的JSX
	} else {
		return null
	}
}
// 购物车
const ShoppingCart = () => {
	if (getUserId()) {
		return '...' // 显示"购物车"的JSX
	} else {
		return null
	}
}

const withLogin = (Component) => {
	const NewComponent = (props) => {
		if (getUserId()) {
			return <Component {...props} />
		} else {
			return null
		}
	}
	return NewComponent
}

const LoginButton = withLogin((props) => {
	return '...' // 显示"退出登录"的JSX
})

const ShoppingCart = withLogin((props) => {
	return '...' // 显示"购物车"的JSX
})
