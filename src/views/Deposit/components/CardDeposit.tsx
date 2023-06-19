import { KeyboardArrowLeft } from '@mui/icons-material';
import { Button, InputAdornment, Paper, TextField } from '@mui/material';
import { AvatarSize, InputNumber } from 'components/common';
import { useRouter } from 'next/router';

type Props = {
  token: TokenType;
};

const CardDeposit = ({ token }: Props) => {
  const router = useRouter();

  return (
    <Paper className='p-6'>
      <div>
        <Button
          size='small'
          variant='outlined'
          className='pr-4'
          startIcon={<KeyboardArrowLeft />}
          onClick={() => router.back()}
        >
          Back
        </Button>
      </div>

      <div className='flex justify-center'>
        <div className='max-w-[400px] space-y-6'>
          <div>
            <div className='mb-3 text-center text-xl font-bold'>How much would you like to deposit?</div>
            <div className='text-center text-sm'>
              Please enter an amount you would like to deposit.
              <br />
              The maximum amount you can deposit is shown below.
            </div>
          </div>

          <div>
            <div className='mb-2 flex justify-between text-sm font-medium'>
              <span>Available to Deposit:</span>
              <span>
                {0} <span className='font-bold'>{token.symbol}</span>
              </span>
            </div>
            <TextField
              fullWidth
              placeholder='0.00'
              InputProps={{
                inputComponent: InputNumber,
                startAdornment: (
                  <InputAdornment position='start'>
                    <AvatarSize size={24} src={token.logoURI} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <Button size='small' variant='text'>
                      MAX
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className='flex justify-center'>
            <Button>Continue</Button>
          </div>
        </div>
      </div>
    </Paper>
  );
};
export default CardDeposit;
