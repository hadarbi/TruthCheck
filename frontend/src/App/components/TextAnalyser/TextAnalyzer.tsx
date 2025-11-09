import { Box, Alert } from '@mui/material';
import { useTextAnalysis } from './hooks/useTextAnalysis';
import { FC } from 'react';
import InputSection from './components/InputSection';
import AnalysisSummary from './components/AnalysisSummary';
import IssuesAndBiases from './components/IssuesAndBiases';
import DetailedAnalysis from './components/DetailedAnalysis';
import TechnicalDetails from './components/TechnicalDetails';
import Disclaimer from './components/Disclaimer';

interface Props {
}

const TextAnalyzer: FC<Props> = ({ }) => {
    const {
        analysisResult,
        error,
        handleAnalyze,
        resetResult,
    } = useTextAnalysis();

    return (
        <Box>
            <InputSection
                handleAnalyze={handleAnalyze}
                resetResult={resetResult}
            />

            {error && (
                <Box mt={2}>
                    <Alert severity="error">{error}</Alert>
                </Box>
            )}

            {analysisResult && (
                <Box mt={4}>
                    <AnalysisSummary
                        summary={analysisResult.summary}
                        certainty={analysisResult.certainty}
                    />
                    <IssuesAndBiases flags={analysisResult.flags} biasTypes={analysisResult.biasTypes} />
                    <DetailedAnalysis
                        factualClaims={analysisResult.factualClaims}
                        potentialIssues={analysisResult.potentialIssues}
                    />
                    <TechnicalDetails
                        tokensUsed={analysisResult.tokensUsed}
                        analysisTime={analysisResult.analysisTime}
                    />
                    <Disclaimer />
                </Box>
            )}
        </Box>
    );
};

export default TextAnalyzer;
