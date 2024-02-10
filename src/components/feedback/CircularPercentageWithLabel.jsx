import PropTypes from 'prop-types'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useTheme } from '../../theme/ThemeProvider'

function CircularPercentageWithLabel(props) {
  const { theme } = useTheme()

  const getColor = (value) => {
    if (value > 65) return 'success'
    if (value > 40) return 'warning'
    return 'error'
  }

  const color = getColor(props.value)

  const textColor = theme === 'light' && props.isThemeChange ? 'black' : 'white'

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} color={color} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color={textColor} className='transition-all duration-500'>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  )
}

CircularPercentageWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  isThemeChange: PropTypes.bool.isRequired,
}

export default CircularPercentageWithLabel
